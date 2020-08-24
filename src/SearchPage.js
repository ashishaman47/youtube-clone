import React from 'react';
import './SearchPage.css';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';

function SearchPage() {
  return (
    <div className='searchPage'>
      <div className='searchPage__filter'>
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />

      <ChannelRow
        image='https://elpais.com/elpais/imagenes/2013/03/13/paco_nadal/1363173758_136317_1363173758_006_sumario_normal.jpg'
        channel='BBC Earth'
        verified
        subs='656K'
        noOfVideos={382}
        description='Showing the various parts of the earths and different lifes present in different sections of our earth'
      />

      <hr />

      <VideoRow
        title='New Show on Discovery Channel Network'
        views='2.3M views'
        subs='555k'
        timestamp='3 days ago'
        description='Discovery network Discovering Lifes'
        channel='ABC Networks'
        image='https://i.pinimg.com/originals/db/90/bf/db90bf76c1f9a338103a75800c2f26bb.jpg'
      />

      <VideoRow
        title='New Show on Discovery Channel Network'
        views='2.3M views'
        subs='555k'
        timestamp='3 days ago'
        description='Discovery network Discovering Lifes'
        channel='ABC Networks'
        image='https://i.pinimg.com/originals/db/90/bf/db90bf76c1f9a338103a75800c2f26bb.jpg'
      />

      <VideoRow
        title='New Show on Discovery Channel Network'
        views='2.3M views'
        subs='555k'
        timestamp='3 days ago'
        description='Discovery network Discovering Lifes'
        channel='ABC Networks'
        image='https://i.pinimg.com/originals/db/90/bf/db90bf76c1f9a338103a75800c2f26bb.jpg'
      />

      <VideoRow
        title='New Show on Discovery Channel Network'
        views='2.3M views'
        subs='555k'
        timestamp='3 days ago'
        description='Discovery network Discovering Lifes'
        channel='ABC Networks'
        image='https://i.pinimg.com/originals/db/90/bf/db90bf76c1f9a338103a75800c2f26bb.jpg'
      />
    </div>
  );
}

export default SearchPage;
