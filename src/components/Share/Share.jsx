import React from 'react'
import "./share.css"
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import RoomIcon from '@mui/icons-material/Room';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

const Share = () => {
    return (
        <div className='share'>
            <div className="shareWrapper">
                <div className="shareTop">
                    <img className='shareProfileImg' src="https://thumbs.wbm.im/pw/small/f1594a827664fd77fd90860cba761015.jpg" alt="" />
                    <input type="text" className='shareInput' placeholder='Whats in you mind?' />
                </div>
                <hr className='shareHr' />
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <PermMediaIcon htmlColor='tomato' className='shareIcon' />
                            <span className='shareOptionText'>Photo or Video</span>
                        </div>
                        <div className="shareOption">
                            <LabelIcon htmlColor='blue' className='shareIcon' />
                            <span className='shareOptionText'>Photo or Video</span>
                        </div>   <div className="shareOption">
                            <RoomIcon htmlColor='green' className='shareIcon' />
                            <span className='shareOptionText'>Photo or Video</span>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotionsIcon htmlColor='goldenrod' className='shareIcon' />
                            <span className='shareOptionText'>Photo or Video</span>
                        </div>
                    </div>
                    <button className='shareButoon'>Share</button>
                </div>
            </div>
        </div>
    )
}

export default Share
