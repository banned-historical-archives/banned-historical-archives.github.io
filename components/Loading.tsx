import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

export default function Loading() {
  return (
    <Backdrop open={true} sx={{ zIndex: 3, background: 'transparent' }}>
      <CircularProgress />
    </Backdrop>
  );
}
