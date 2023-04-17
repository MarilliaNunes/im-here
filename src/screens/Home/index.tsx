import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native'
import { Participant } from '../../components/Participant'
import { styles } from './styles'

export function Home(){

const participants = ['Name', 'Marillia', 'Diego', 'Rodrigo', 'Biro', 'Vini', 'Ana', 'Isa', 'Mike', 'João', 'Roberto', 'André', 'Rayssa', 'Ricardo', 'Roberta', 'Kayque', 'Jaque']

  function handleParticipantAdd(name: string){
    if(participants.includes(name)) {
      return Alert.alert('Participante existe', 'Já existe um participante na lista com esse nome')
    }
    console.log('Você clicou no botão de adicionar!')
  }

  function handleParticipantRemove(name: string){

    Alert.alert('Remover', `Gostaria de remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => Alert.alert('Deletado!')
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }

  return(
    <View 
      style={styles.container}
    >
      <Text style={styles.eventName}
      >
        Nome do Evento
      </Text>
      <Text style={styles.eventDate} >
        Sexta, 4 de novembro de 2022
      </Text>

      <View style={styles.form}>
        <TextInput 
          style={styles.input}
          placeholder='Nome do Participante'
          placeholderTextColor='#6B6B6B'
        />

        <TouchableOpacity style={styles.button} onPress={() => handleParticipantAdd('Name')}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList 
        data={participants}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <Participant 
            key={item}
            name={item} 
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={ () => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença
          </Text>
        )}
      />
        
    </View>
  )
}