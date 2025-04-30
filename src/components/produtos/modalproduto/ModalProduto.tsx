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
                overlayStyle={{
                    background: 'rgba(0, 0, 0, 0.5)', // Fundo semitransparente
                    display: 'flex', // Centraliza o modal
                    alignItems: 'center', // Centraliza verticalmente
                    justifyContent: 'center', // Centraliza horizontalmente
                }}
                contentStyle={{
                    border: 'none', // Remove qualquer borda externa
                    borderRadius: '10px', // Bordas arredondadas
                    padding: '0', // Remove padding interno
                    width: '100%', // Ajusta a largura ao conteúdo
                    maxWidth: '600px', // Define um tamanho máximo
                    height: 'auto', // Ajusta a altura ao conteúdo
                    overflow: 'hidden', // Remove scroll desnecessário
                    background: 'transparent', // Fundo transparente
                }}
            >
                <FormProduto />
            </Popup>
        </>
    );
}

export default ModalProduto;