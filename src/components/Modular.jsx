import { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import CheckRoundIcon from '@rsuite/icons/CheckRound';
import { Modal, Button,Loader } from 'rsuite';
import '../styles.css';
const CheckRound = ({ size }) => <CheckRoundIcon style={{ fontSize: size, marginRight: 10,color:'#5ea83e'  }} />;

function Modular({loader, nombreProceso }) {
 const [nombreProcesos, setnombreProcesos] = useState();
  useEffect(() => {
      setnombreProcesos(nombreProceso)
    setOpen(true)
  }, []);

  const [open, setOpen] = useState(false);
  const [rows, setRows] = useState(0);
  const navigate = useNavigate()
  const handleOpen = () => setOpen(true);
  const handleClose = () => {setOpen(false);
  
  navigate('/')
  }
 

  return (
    <>
     

      <Modal open={open} 
      onClose={handleClose}
      
      >
        <Modal.Header>
          
        </Modal.Header>
        <Modal.Body>
        {loader ? (
          <>
            <Modal.Title>CARGANDO...</Modal.Title>
            <div style={{ textAlign: 'center' }}>
              <Loader size="lg" />
            </div>
          </>
            
          ) 
               :
               (
                <>
                  <Modal.Title>LISTO!</Modal.Title>
                 <div  style={{ textAlign: 'center' }}> 
                
                <CheckRound  size="5em" />          
                </div>
                </>
               
              
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} appearance="primary">
            Ok
          </Button>
          <Button onClick={handleClose} appearance="subtle">
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Modular
