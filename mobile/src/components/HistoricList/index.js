import React from 'react';
import { View, Text, FlatList } from 'react-native';

// import { Container } from './styles';

export default function HistoricList({data, limit = 30}) {
  return (
      <View >
          <View style={{
              flexDirection:'row',
              justifyContent:'space-between',
              marginTop: 10
            }}>
              <Text>
                Data
              </Text>
              <Text>
                Peso
              </Text>
              <Text>
                Preço
              </Text>
            </View>
            <View>
            <FlatList
              data={data}
              renderItem={({ item, index, separators }) => (
                <View style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 10
                }}>
                  <Text>
                    {item.date}
                  </Text>
                  <Text>
                    {item.size}
                  </Text>
                  <Text>
                    {item.price}      
                  </Text>
                </View>
              )}
              keyExtractor={item => item.id.toString()}
            />
            </View>
      </View>
  );
}
