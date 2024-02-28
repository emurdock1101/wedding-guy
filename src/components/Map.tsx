import {Paper} from '@material-ui/core';

const Map: React.FC<{}> = () => {
  return (
    <Paper elevation={2}>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3132.0534000157977!2d-78.24869092384716!3d38.27825497186284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b413a9b56caabf%3A0xdbbfe5cf9413cbf2!2s352%20Beautiful%20Run%20Rd%2C%20Madison%2C%20VA%2022727!5e0!3m2!1sen!2sus!4v1709071359538!5m2!1sen!2sus'
        width='600'
        height='450'
        style={{border: '0'}}
        allowFullScreen={true}
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'></iframe>
    </Paper>
  );
};

export default Map;
