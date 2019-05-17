import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const Course = props => {
    return(
        <React.Fragment>
            {props.records ? (
                <Card>
                    <CardMedia style={{height:0, paddingTop: '56.25%'}}
                        image={props.image}
                        title={props.title}
                        />
                    <CardContent>
                        <Typography gutterBottom variant="headline" component="h2">
                            {props.title}
                        </Typography>
                        <Typography component="p">
                            {props.owner}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary" href={props.url} target="_blank">
                            Go To Article
                        </Button>
                    </CardActions>

                </Card>
            ): null }
        </React.Fragment>
    )
}

export default Course;