import React, { Component } from 'react';
/*
 simple list
 */
class App2 extends Component {
    state = {
        boards: [
            {
                brdno: 1,
                brdwriter: 'Heo sungrok',
                brdtitle: 'If you intend to live then you die',
                brddate: new Date()
            },
            {
                brdno: 2,
                brdwriter: 'An sujin',
                brdtitle: 'Founder for two countries',
                brddate: new Date()
            }
        ]
    }
  
    render() {
        const { boards } = this.state;

        return (
            <div>
            {
                boards.map(function(row){ 
                    return row.brdno + row.brdwriter ;
                }) 
            }
            </div>
        );
    }
}

export default App2;
