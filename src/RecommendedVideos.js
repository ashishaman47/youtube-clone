import React from 'react';
import './RecommendedVideos.css';
import VideoCard from './VideoCard';

function RecommendedVideos() {
  return (
    <div className='recommendedVideos'>
      <h2>Recommended</h2>
      <div className='recommendedVideos__videos'>
        <VideoCard
          title='Chocolate Pastries on Go'
          views='2.3M views'
          timestamp='3 days ago'
          channelImage='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4W-mEXayaF8KrHdhHeArdGZr1CP_odr-JUA&usqp=CAU'
          channel='ABC Networks'
          image='https://ww1.prweb.com/prfiles/2008/11/13/669094/gI_0_FN.com..black.jpg'
        />

        <VideoCard
          title='Lets Start the Music --> Aay DJ Music Baja'
          views='2.3M views'
          timestamp='3 days ago'
          channelImage='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4W-mEXayaF8KrHdhHeArdGZr1CP_odr-JUA&usqp=CAU'
          channel='ABC Networks'
          image='https://www.adgully.com/img/400x300/201612/v.jpg'
        />

        <VideoCard
          title='Disney Channel Currently Showing Mickey Mouse'
          views='2.3M views'
          timestamp='3 days ago'
          channelImage='https://www.disneychannel.ca/wp-content/themes/disney-child/assets/images/thumbnail-generic.jpg'
          channel='ABC Networks'
          image='https://lumiere-a.akamaihd.net/v1/images/eu_tv_dc-youtube_mob_m_16771162.jpeg?region=0,0,800,600&width=768'
        />

        <VideoCard
          title='Wizard Of Waverly Place'
          views='2.3M views'
          timestamp='3 days ago'
          channelImage='https://www.disneychannel.ca/wp-content/themes/disney-child/assets/images/thumbnail-generic.jpg'
          channel='ABC Networks'
          image='https://cameronscookware.com/wp-content/uploads/2019/12/disney-channel-wallpaper-lovely-disney-channel-wallpapers-wallpaper-cave-this-year-of-disney-channel-wallpaper.jpg'
        />

        <VideoCard
          title='Life'
          views='2.3M views'
          timestamp='3 days ago'
          channelImage='https://wallpapercave.com/wp/wp2827737.jpg'
          channel='ABC Networks'
          image='https://i.pinimg.com/originals/04/37/20/043720b072317b3c880ca39d443584b6.jpg'
        />

        <VideoCard
          title='Shake it Up'
          views='2.3M views'
          timestamp='3 days ago'
          channelImage='https://www.disneychannel.ca/wp-content/themes/disney-child/assets/images/thumbnail-generic.jpg'
          channel='ABC Networks'
          image='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR77T8BwP6ZeS__YsI5Skv6Ubsz3WrcQI1jRg&usqp=CAU'
        />

        <VideoCard
          title='New Show on Discovery Channel Network'
          views='2.3M views'
          timestamp='3 days ago'
          channelImage='https://wallpapercave.com/wp/wp2827737.jpg'
          channel='ABC Networks'
          image='https://i.pinimg.com/originals/db/90/bf/db90bf76c1f9a338103a75800c2f26bb.jpg'
        />
      </div>
    </div>
  );
}

export default RecommendedVideos;
