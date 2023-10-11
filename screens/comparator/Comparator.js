import React, { useEffect, useState } from 'react'
import { Image, ScrollView, StyleSheet, View } from 'react-native'
import { Button, Card, Divider, IconButton, MD3Colors, Menu, ProgressBar, Text, Tooltip } from 'react-native-paper'
import apiPoke from '../../services/apiPoke'
import Picker from 'react-native-picker-select'



const Comparator = () => {

    const [primeiro, setPrimeiro] = useState({})
    const [segundo, setSegundo] = useState({})
    const [lista, setLista] = useState([])
    const [n, setN] = useState(0)

    const [comparador, setComparador] = useState(['bulbasaur', 'charmander'])

    function alterar(value) {
        comparador.splice(0, 1, value)
        setN(n + 1)
        console.log(comparador, n);
    }
    function alterarSegundo(value) {
        comparador.splice(1, 1, value)
        setN(n + 1)
        console.log(comparador, n);
    }

    useEffect(() => {
        apiPoke.get('pokemon/' + comparador[0]).then(resultado => {
            setPrimeiro(resultado.data)
        })
        apiPoke.get('pokemon/' + comparador[1]).then(resultado => {
            setSegundo(resultado.data)
        })
        apiPoke.get('pokemon?limit=100000&offset=0').then(resultado => {
            setLista(resultado.data.results)
        })


    }, [n])

    /*const pickerItens = [lista.map(item=>item.name)]
    console.log(pickerItens); */


    return (
        <ScrollView>

            <Picker
                onValueChange={(value) => alterar(value)}
                placeholder={{ label: 'Selecione um Pokemon', value: null }}
                items={
                    lista.map(item => (
                        { label: item.name, value: item.name }
                    ))
                }
            />
            <Picker
                onValueChange={(value) => alterarSegundo(value)}
                placeholder={{ label: 'Selecione um Pokemon', value: null }}
                items={
                    lista.map(item => (
                        { label: item.name, value: item.name }
                    ))
                }
            />
            <View style={estilo.imagem}>
                {primeiro.sprites &&
                    <Image source={{ uri: primeiro.sprites?.other?.dream_world?.front_default }}
                        style={{ height: 100, width: 100, alignItems:'flex-start' }} />
                }
                <Text style={{}} >Aqui fica legal uma imagem</Text>
                {segundo.sprites &&

                    <Image source={{ uri: segundo.sprites?.other?.dream_world?.front_default }}
                        style={{ height: 100, width: 100, alignItems:'flex-end' }} />
                }
            </View>
            <View style={estilo.informacao} >
                <View style={{margin:5}}>
                    <Text style={{color: '#37A7F2'}}>{primeiro.name} </Text>
                    <Divider/>
                    {primeiro.stats &&
                        primeiro.stats.map(item => (
                            <View>
                            <Text style={{color: '#37A7F2',}}>{item?.stat?.name},{item.base_stat}</Text>
                            <ProgressBar progress={item.base_stat/100} color='blue' />
                            </View>
                        ))
                    }
                </View>
                <View style={{margin:5, marginLeft:60}}>
                    <Text style={{color: '#37A7F2', }}> {segundo.name}</Text>
                    <Divider/>
                    {segundo.stats &&
                        segundo.stats.map(item => (
                            <View style={{alignItems:'flex-end'}}>
                            <Text style={{color: '#37A7F2'}}>{item.base_stat},{item?.stat?.name}</Text>
                            <ProgressBar progress={item.base_stat/100} color={MD3Colors.error50} />
                            </View>
                        ))
                    }
                </View>
            </View>
        </ScrollView>
    )
}

const estilo = StyleSheet.create({
    imagem: {
        margin: 10,
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#37A7F2',
        borderRadius: 20, 
        padding:20,
       
    },
    informacao: {
        display: 'flex',
        flexDirection: 'Row',
        margin: 10,
        borderWidth: 2, // Largura da borda em pixels
        borderColor: 'blue',
        borderRadius: 20,
        padding:10,
    }
})

export default Comparator