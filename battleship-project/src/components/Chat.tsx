//Chat Box Component
import styles from './styles/Chat.module.css'
import { useState, useEffect } from 'react';

interface ChatProps {
    name: string;
}

const Chat: React.FC<ChatProps> = ({ name }) => {
    let [message, setMessage] = useState<string[]>([]);
    let [inputValue, setInputValue] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    }

    const handleSendClick = () => {
        if(inputValue.trim() !== ''){
            setMessage([...message, `${name}: ${inputValue}`]);
            setInputValue('');
        }
    }

    /*As soon as I press enter key*/
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if(e.key === 'Enter'){
                handleSendClick();
            }
        }

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        }
    }, [inputValue, message]);

    return(
        <div>
            <div className={styles.chatBox}>
                <div className={styles.chat}>
                    <h3 className={styles.header}>Chat Room</h3>
                    <div className={styles.chatMessages}>
                        {message.map((msg, index) => (
                            <div key={index}>{msg}</div>
                        ))}
                    </div>
                </div>
                <div >
                    <input className={styles.input} 
                    type="text" 
                    placeholder="Type your message here"
                    value={inputValue}
                    onChange={handleInputChange}
                    />
                    <button className={styles.button} onClick={handleSendClick}>SEND</button>
                </div>
            </div>
        </div>
    )
}

export default Chat;