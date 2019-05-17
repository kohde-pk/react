import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import Base from '../../base';

import Card from '../../containers/Cards/Card';

class CardGrid extends React.Component {
    state = {
        searchString: '',
        loading: true,
        records: []
    }

    constructor() {
        super()
        this.getPosts()
    }

    componentDidMount() {
        axios
        .get('/content.json', {
            params: {
                Id: 12345
            }
        })
            .then(response => {
            const fetchedData = [];
            for (let key in response.data) {
                fetchedData.push({
                    ...response.data[key],
                    key: response.data.key
                });
            }
                this.setState({loading: false, cards: fetchedData});
            })
            .catch(error => {
                this.setState({loading: false});
            });
    }

    // getPosts = () => {
    //     axios
    //     .get('/content.json/?')
        
    //     .then((response) => {
    //         this.setState({records: response.data})
    //     )}
    //     .catch((error) => {
    //         console.log("Error occured while fetching data");
    //         console.log(error);
    //     })
    // }

    onSearchInputChange = (e) => {
        if (e.target.value) {
            this.setState({searchString: e.target.value})
        } else {
            this.setState({searchString: ''})
        }
        this.getPosts()
    }

    render() {
        return (
            <React.Fragment>
                {this.state.records ? (
                    <div>
                        <TextField style={{padding: 24}}
                            id="searchInput"
                            placeholder="Search for Articles"
                            margin="normal"
                            onChange={this.onSearchInputChange} />
                        <Grid container spacing={24} style={{padding: 24}}>
                            {this.state.records.map(currentRecord=> (
                                <Grid item xs={12} sm={6} lg={4} xl={3}>
                                    <Card record={currentRecord} />
                                </Grid>
                            ))}
                        </Grid>


                    </div>

                ) : "No records found"}
            </React.Fragment>
        );
        }
}

export default CardGrid;