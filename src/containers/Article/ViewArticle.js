import React, { Component, Fragment } from 'react';

import Article from '../../components/Content/Article';


class ViewArticle extends Component {
  state = {
    id: '154',
    dateAdded: '2019-05-19',
    views: '19',
    timeToRead: '15 min',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien pellentesque habitant morbi tristique senectus. Phasellus vestibulum lorem sed risus. Nec feugiat nisl pretium fusce id velit ut tortor. Ipsum a arcu cursus vitae congue mauris rhoncus. Volutpat ac tincidunt vitae semper quis lectus nulla at volutpat. Morbi tristique senectus et netus et malesuada. Sodales ut etiam sit amet. Aliquam nulla facilisi cras fermentum odio. Morbi quis commodo odio aenean. Risus feugiat in ante metus dictum at.\nHabitant morbi tristique senectus et netus et malesuada. Id diam vel quam elementum pulvinar etiam non quam lacus. Ut diam quam nulla porttitor massa id neque aliquam vestibulum. Aenean pharetra magna ac placerat vestibulum lectus mauris ultrices. Non blandit massa enim nec dui nunc mattis. Ut venenatis tellus in metus vulputate eu scelerisque. Sem fringilla ut morbi tincidunt augue interdum velit. Quam pellentesque nec nam aliquam sem et. Mattis rhoncus urna neque justo. Nunc mattis enim ut tellus. Magna etiam tempor orci eu lobortis elementum nibh tellus molestie.',
    title: 'This is the Article Title',
    owner: 'Kathleen'
  }
  render() {
    return (
      <Fragment>
        <Article 
          id={this.state.id}
          title={this.state.title} 
          owner={this.state.owner} 
          content={this.state.content} 
          views={this.state.views} 
          timeToRead={this.state.timeToRead} 
          dateAdded={this.state.dateAdded} 
        />
      </Fragment>
    );
  }
}

export default ViewArticle; 
