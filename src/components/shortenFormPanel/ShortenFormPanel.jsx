import Button from "../button/Button";

import './shortenFormPanel.scss';

const ShortenFormPanel = () => {
    return (
        <div className="form__panel">
            <form>
                <input type="text" placeholder="Shorten a link here..." />
                <Button 
                    content='Shorten It!'
                    type='submit'
                    className='primary' />
            </form>
        </div>
    )
}

export default ShortenFormPanel;