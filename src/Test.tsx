import { Button, ButtonProps, ButtonSize, ButtonKind } from 'mwt-components-react';
import { useEffect, useState } from 'react';

const Text = () => {
    const [text, setText] = useState('');

    useEffect(() => {
        const getButtonContent = async () => {
            const response = await fetch('cms-button.json', { headers: { 'Content-Type': 'application/json' }});
            console.log(response);
            if(response.ok) {
                const content = await response.json();
                console.log(content);
                setText(content.text)
            }
        }
        getButtonContent();
    }, []);

    const buttonProps: ButtonProps = {
        onClick: () => {},
        size: ButtonSize.MEDIUM,
        kind: ButtonKind.PRIMARY
    }
    
    return (
        <div className="App">
            {/* <Button size='large' primary={true} text='true' /> */}
            <Button {...buttonProps}>{text}</Button>
        </div>
    );
}
export default Text;