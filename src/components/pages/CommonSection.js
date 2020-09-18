import React from 'react';
import { FormattedMessage } from 'react-intl';

const style = {
    backgroundColor: '#bbb',
    // color: '#bbb'
}
        
class CommonSection extends React.Component {
    render() {
        return (
            <div style={style}>
                <p>Common Section: <FormattedMessage
                    id="common.title"
                    defaultMessage="Common Title" 
                /></p>
            </div>
        )
    }
}

export default CommonSection;