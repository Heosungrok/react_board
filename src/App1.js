import React, { Component } from 'react';
/*
 simple list
 */
class App1 extends Component {
    state = {
        boards: [
            {
                brdno: 1,
                brdwriter: 'An Sujin',
                brdtitle: 'If you intend to live then you die',
                brddate: new Date()
            },
            {
                brdno: 2,
                brdwriter: 'Heo sungrok',
                brdtitle: 'Founder for two countries',
                brddate: new Date()
            }
        ]
    }
  
    render() {
        const { boards } = this.state;
        const list = boards.map(function(row){ 
            return row.brdno + row.brdwriter ;
        });
        
        return (
            <div>
                {list}
            </div>
        );
    }
}

export default App1;
