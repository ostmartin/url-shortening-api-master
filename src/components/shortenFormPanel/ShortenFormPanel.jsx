import { useState, useRef } from "react";

import Button from "../button/Button";
import useHttp from "../../hooks/http.hook";
import ShortenedLink from '../shortenedLink/ShortenedLink';

import uId from '../../utils/uId';

import './shortenFormPanel.scss';

const ShortenFormPanel = () => {
    const [links, setLinks] = useState([]);
    const {process, request, clearError, setProcess} = useHttp();
    const inputVal = useRef(null);

    const updateLinks = (event, link) => {
        event.preventDefault()
        clearError()

        const linkPattern = new RegExp('^(https?:\\/\\/)?'+ // Протокол (http:// или https://)
                                    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // Домен...
                                    '((\\d{1,3}\\.){3}\\d{1,3}))' + // ...или IP
                                    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // Порт и путь
                                    '(\\?[;&a-z\\d%_.~+=-]*)?' + // Параметры запроса
                                    '(\\#[-a-z\\d_]*)?$', 'i'); // Фрагмент (якорь)
        
        if (linkPattern.test(link)) {
            request(`https://api.shrtco.de/v2/shorten?url=${link}`)
            .then(res => {
                setLinks(prev => {
                    const prevArr = [...prev];

                    if (prevArr.length >= 6) {
                        prevArr.shift();
                    }

                    return [
                        ...prevArr,
                        {
                            id: uId(),
                            fullLink: res.result.original_link,
                            shortLink: res.result.full_short_link
                        }
                    ]
                })
            })
            .then(() => setProcess('success'));
        } else {
            setProcess('error');
        }
    }

    const content = <ul>
            {links.map(link => (
                <ShortenedLink
                    key={link.id}
                    fullLink={link.fullLink}
                    shortLink={link.shortLink}/>
            )).reverse()}
        </ul>

    return (
        <>
            <div className="form__panel">
                <form>
                    <input className={process} type="text" placeholder="Shorten a link here..." ref={inputVal} />
                        {process === 'error' ? (
                            <div className="error__text"><em>
                                Please add a link
                            </em></div>
                        ) : null}
                    <Button 
                        content='Shorten It!'
                        type='submit'
                        className='primary'
                        onClick={(e) => updateLinks(e, inputVal.current.value)} />
                </form>
            </div>
            <div className="links-list">
                {content}
            </div>
        </>
    )
}

export default ShortenFormPanel;