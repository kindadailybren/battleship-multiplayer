import styles from './styles/Nav.module.css';
import { useState } from 'react';

interface NavBarProps { //Interface for Nav Bar of Passed arguments template
    name?: string;
    onNameChange: (name: string) => void;
}

const NavBar: React.FC<NavBarProps> = ({ onNameChange }) => {
    let [isEditing, setIsEditing] = useState<boolean>(false);
    let [name, setName] = useState<string>("Set Name");

    const handleEdit = () => { //Function on toggling the edit 
        setIsEditing(true);
    }

    const handleInputChange = (input: React.ChangeEvent<HTMLInputElement>) => {
        setName(input.target.value);
    }

    const handleNameChange = () => {//Function on toggling the edit off and setting the name 
        setIsEditing(false);
        onNameChange(name);
    }

    return(
        <div className={styles.navBar}>
            <div className={styles.title}>
                <h1>BATTLESHIP GAME</h1>
            </div>
            <nav className={styles.navLinks}>
            {isEditing ? ( //If True
                <input
                    className={styles.inputBox}
                    type="text"
                    value={name}
                    onChange={handleInputChange}
                    onBlur={handleNameChange}
                    autoFocus
                />
            ) : ( //If False
                <span className={styles.link} onClick={handleEdit}>
                    {name}
                </span>
            )}
        </nav>
        </div>
    )
}

export default NavBar;  