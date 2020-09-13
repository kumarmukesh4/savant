import React, { useEffect } from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog, {DialogProps} from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Icon from '@material-ui/core/Icon';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { TransitionProps } from '@material-ui/core/transitions';
import { RouteComponentProps } from 'react-router';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(1),
      backgroundColor: '#61dafb',
      color: '#1E2125',
      '&:hover': {
        backgroundColor: '#09c9f9',
        color: '#000'
      }
    },
    scrollable: {
      overflow: 'auto',
      height: 'auto'
    }
  }),
);

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & { children?: React.ReactElement<any, any> },
    ref: React.Ref<unknown>,
  ) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  interface Iprop extends RouteComponentProps<{}> {}
type Props = Iprop & any;
function AppDialog(props: Props) {
    const classes = useStyles();
    const { isOpenDialog, closeDialog, dialogConfig, size, showActionRow, isScrolable, title, clickOutSideToClose } = props;
    const [open, setOpen] = React.useState(isOpenDialog);
    const [maxWidth, setMaxWidth] = React.useState<DialogProps['maxWidth']>(size);
    const [fullWidth, setFullWidth] = React.useState(true);

    useEffect(()=>{
        setOpen(props?.isOpenDialog);
        console.log(isOpenDialog , 'isOpenDialog')
    },[props?.isOpenDialog])
    const handleClickOpen = () => {
        setOpen(isOpenDialog);
    };

    const handleClose = () => {
        setOpen(false);
        closeDialog();
    };
    return (
        <>
            <Dialog open={open} 
                    fullWidth={fullWidth}
                    maxWidth={maxWidth}
                    onClose={handleClose} 
                    disableBackdropClick ={clickOutSideToClose}
                    aria-labelledby="form-dialog-title" 
                    TransitionComponent={Transition}>
                <DialogTitle id="form-dialog-title">{title} </DialogTitle>
                <DialogContent className={classes.scrollable}>
                     {props.children}
                </DialogContent>
            </Dialog>
        </>
    )
}

export default AppDialog
