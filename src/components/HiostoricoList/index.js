import React from "react";
import { 
    Container, 
    TipoText, 
    Tipo,
    IconView,
    ValorText
} from "./style";

import { TouchableWithoutFeedback, Alert, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Feather'



export default function HistoricoList({data, deleteItem}){
    function hendleDeleteItem() {
        Alert.alert(
            'Atenção',
            'Você tem certeza que deseja deletar esse registro ?',
            [
                {
                    text: 'Cancelar',
                    style: 'cancel',
                },
                {
                    text: 'Continuar',
                    onPress: () => deleteItem(data.id)
                }
            ]
        )
    }

    return(
        <TouchableWithoutFeedback onLongPress={hendleDeleteItem}>
            <Container>
                <Tipo>
                    <IconView tipo={data.type}>
                        <Icon 
                            name={data.type === 'despesa' ? 'arrow-down' : 'arrow-up'} 
                            size={20} 
                            color="#fff"
                        />
                        <TipoText>{data.type}</TipoText>
                    </IconView>
                    <Text style={{color: '#121212', fontSize: 20}}>
                        {data.description}
                    </Text>
                </Tipo>

                <ValorText>
                    R$ {data.value}
                </ValorText>
            </Container>
        </TouchableWithoutFeedback>
    )
}