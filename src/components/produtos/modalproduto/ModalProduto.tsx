import Popup from 'reactjs-popup';

import 'reactjs-popup/dist/index.css';
import FormProduto from '../formproduto/FormProduto';

function ModalProduto() {
    return (
        <>
            <Popup
                trigger={
                    <button 
                        className='border rounded px-4 py-2 hover:bg-white hover:text-indigo-800'>
                        Novo Produto
                    </button>
                }
                modal
                overlayStyle={{ background: 'rgba(0, 0, 0, 0.5)' }} // Fundo transparente
                contentStyle={{
                    borderRadius: '10px', // Bordas arredondadas
                    padding: '0', // Remove padding interno
                    width: '90%', // Ajusta a largura do popup
                    maxWidth: '600px', // Define um tamanho máximo
                    height: '89vh', // Define uma altura máxima
                    overflowY: 'auto', // Adiciona scroll vertical
                }}
            >
                <FormProduto />
            </Popup>
        </>
    );
}

export default ModalProduto;