import { useState, memo } from 'react';
import Button from '../button/Button';

import './shortenedLink.scss';

const ShortenedLink = memo(function ShortenedLink ({fullLink, shortLink}) {
    const [copied, setCopied] = useState();

    const copyToClipboard = () => {
        if (!copied) {
            navigator.clipboard.writeText(shortLink)
                .then(() => setCopied(true));
        }
    }

    return(
        <li className='short-link'>
            <div className='full'>
                {fullLink}
            </div>
            <div className='short'>
                {shortLink}
            </div>
            <Button
                content={copied ? 'Copied!' : 'Copy'}
                type='button'
                className={copied ? 'primary copied' : 'primary'}
                onClick={copyToClipboard}
            />
        </li>
    )
})

export default ShortenedLink;