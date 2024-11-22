import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native'; // Corrigi as importações
import TaskCard from './TaskCard'; // Corrigi o nome do arquivo (presumindo que o arquivo se chama 'TaskCard.js')

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Task Title</Text>
      <TextInput placeholder="Nome da tarefa" style={styles.input} />
      <Text style={styles.label}>Tarefa Descrição</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Descrição da tarefa"
        multiline
      />

      <View style={styles.buttonContainer}>
        <Button
          title="Salvar"
          color="darkgreen"
          onPress={() => {
            alert('Eu não sei o meu nome');
          }}
        />
      </View>

      <TaskCard
        title="Teste"
        desc="Descrição Teste"
        status="Done"
        onClick={() => {
          alert('Deletar');
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 16,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  buttonContainer: {
    margin: 16,
  },
  buttonGreen: {
    borderRadius: 12,
  },
});
