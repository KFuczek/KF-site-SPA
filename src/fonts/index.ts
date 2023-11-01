import localFont from 'next/font/local';

const poiretOne = localFont({
  src: '../../public/fonts/PoiretOne-Regular.ttf'
});

const luminari = localFont({
  src: '../../public/fonts/Luminari-Regular.ttf'
});

const limeLight = localFont({
  src: '../../public/fonts/Limelight-Regular.ttf'
});

const streamster = localFont({
  src: '../../public/fonts/Streamster.ttf'
});

const outrun = localFont({
  src: [
    {
      path: '../../public/fonts/Outrun-future.otf',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../../public/fonts/Outrun-future-bold.otf',
      weight: '700',
      style: 'bold'
    },
    {
      path: '../../public/fonts/Outrun-future-bold-italic.otf',
      weight: '700',
      style: 'italic'
    }
  ]
});

const openSans = localFont({
  src: [
    {
      path: '../../public/fonts/OpenSans-Regular.ttf',
      weight: '400',
      style: 'normal'
    }
  ]
});

export { poiretOne, luminari, streamster, outrun, openSans, limeLight };
