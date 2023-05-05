import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  TouchableOpacity,
  Keyboard,
} from 'react-native';

export default function App() {
  const [employees, setEmployees] = useState([]);
  const [employeeName, setEmployeeName] = useState('');
  const [employeeId, setEmployeeId] = useState('');
  const [designation, setDesignation] = useState('');
  const [searchText, setSearchText] = useState('');

  const addEmployee = () => {
    setEmployees([...employees, { name: employeeName, employeeId, designation }]);
    setEmployeeName('');
    setEmployeeId('');
    setDesignation('');
    Keyboard.dismiss();
  };

  const deleteEmployee = (index) => {
    const newEmployees = [...employees];
    newEmployees.splice(index, 1);
    setEmployees(newEmployees);
  };

  const updateEmployee = (index) => {
    const newEmployees = [...employees];
    newEmployees[index].name = employeeName;
    newEmployees[index].employeeId = employeeId;
    newEmployees[index].designation = designation;
    setEmployees(newEmployees);
    setEmployeeName('');
    setEmployeeId('');
    setDesignation('');
    Keyboard.dismiss();
  };

  const renderEmployee = (employee, index) => {
    return (
      <View key={index} style={styles.employee}>
        <Text style={styles.employeeName}>Name: {employee.name}</Text>
        <Text style={styles.employeeId}>Employee ID: {employee.employeeId}</Text>
        <Text style={styles.designation}>Designation: {employee.designation}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => {
              setEmployeeName(employee.name);
              setEmployeeId(employee.employeeId);
              setDesignation(employee.designation);
              deleteEmployee(index);
            }}
            style={styles.deleteButton}
          >
            <Text style={styles.buttonText}>Delete</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setEmployeeName(employee.name);
              setEmployeeId(employee.employeeId);
              setDesignation(employee.designation);
              updateEmployee(index);
            }}
            style={styles.updateButton}
          >
            <Text style={styles.buttonText}>Update</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Employee Database</Text>
      <TextInput
        style={styles.input}
        placeholder="Employee Name"
        value={employeeName}
        onChangeText={(text) => setEmployeeName(text)}
        placeholderTextColor="black"
      />
      <TextInput
        style={styles.input}
        placeholder="Employee ID"
        value={employeeId}
        onChangeText={(text) => setEmployeeId(text)}
        placeholderTextColor="black"
      />
      <TextInput
        style={styles.input}
        placeholder="Designation"
        value={designation}
        onChangeText={(text) => setDesignation(text)}
        placeholderTextColor="black"
      />
      <TouchableOpacity onPress={addEmployee} style={styles.addButton}>
        <Text style={styles.buttonText}>Add Employee</Text>
      </TouchableOpacity>
      <Text style={styles.subHeader}>Employee List</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Search Employees"
        value={searchText}
        onChangeText={(text)=> setSearchText(text)}
placeholderTextColor="black"
/>
{filteredEmployees.map(renderEmployee)}
</ScrollView>
);
}

const styles = StyleSheet.create({
container: {
flexGrow: 1,
backgroundColor: 'sky blue',
alignItems: 'center',
justifyContent: 'flex-start',
paddingVertical: 40,
},
header: {
fontSize: 28,
fontWeight: 'bold',
marginBottom: 20,
},
subHeader: {
fontSize: 22,
fontWeight: 'bold',
marginTop: 20,
marginBottom: 10,
},
input: {
borderWidth: 1,
borderColor: 'black',
borderRadius: 5,
width: '80%',
height: 40,
color: 'black',
paddingHorizontal: 10,
marginBottom: 10,
},
addButton: {
backgroundColor: '#008080',
paddingVertical: 10,
paddingHorizontal: 20,
borderRadius: 5,
marginBottom: 20,
},
buttonText: {
color: '#fff',
fontSize: 18,
},
employee: {
borderWidth: 1,
borderColor: '#b5b5b5',
borderRadius: 5,
width: '80%',
paddingHorizontal: 10,
paddingVertical: 20,
marginBottom: 10,
},
employeeName: {
fontSize: 16,
fontWeight: 'bold',
color: 'black',

},
employeeId: {
fontSize: 14,
color: 'black',

},
designation: {
fontSize: 14,
color: 'black',
},
buttonContainer: {
flexDirection: 'row',
justifyContent: 'space-around',
marginTop: 10,
},
deleteButton: {
backgroundColor: '#FF6347',
paddingVertical: 5,
paddingHorizontal: 20,
borderRadius: 5,
},
updateButton: {
backgroundColor: '#008080',
paddingVertical: 5,
paddingHorizontal: 20,
borderRadius: 5,
},
searchInput: {
borderWidth: 1,
borderColor: 'black',
borderRadius: 5,
placeholder :'black',
width: '80%',
height: 40,
color: 'black',
paddingHorizontal: 10,
marginBottom: 20,
},
});







