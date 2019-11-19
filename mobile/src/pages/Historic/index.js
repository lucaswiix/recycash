import React from 'react';
import { View, FlatList, Text } from 'react-native';
import HistoricList from '../../components/HistoricList';

import { styles } from './styles';

export default function Historic() {
    const fakeData = {
        historic: 
            [
                {
                  "id": 0,
                  "price": "R$ 13.2",
                  "size": "61kg",
                  "date": "13/09/2014 04:05"
                },
                {
                  "id": 1,
                  "price": "R$ 14.2",
                  "size": "88kg",
                  "date": "15/01/2018 11:37"
                },
                {
                  "id": 2,
                  "price": "R$ 4.9",
                  "size": "83kg",
                  "date": "14/10/2015 02:19"
                },
                {
                  "id": 3,
                  "price": "R$ 11.2",
                  "size": "39kg",
                  "date": "01/03/2018 07:34"
                },
                {
                  "id": 4,
                  "price": "R$ 4.3",
                  "size": "21kg",
                  "date": "29/03/2018 03:45"
                },
                {
                  "id": 5,
                  "price": "R$ 14.2",
                  "size": "48kg",
                  "date": "11/10/2014 04:15"
                },
                {
                  "id": 6,
                  "price": "R$ 17.3",
                  "size": "74kg",
                  "date": "25/11/2015 07:21"
                },
                {
                  "id": 7,
                  "price": "R$ 14.3",
                  "size": "47kg",
                  "date": "05/06/2016 03:38"
                },
                {
                  "id": 8,
                  "price": "R$ 19.7",
                  "size": "53kg",
                  "date": "12/12/2017 05:51"
                },
                {
                  "id": 9,
                  "price": "R$ 10.7",
                  "size": "91kg",
                  "date": "01/07/2017 06:13"
                },
                {
                  "id": 10,
                  "price": "R$ 9.6",
                  "size": "23kg",
                  "date": "21/04/2015 09:06"
                },
                {
                  "id": 11,
                  "price": "R$ 16.1",
                  "size": "66kg",
                  "date": "16/04/2014 03:22"
                },
                {
                  "id": 12,
                  "price": "R$ 2.7",
                  "size": "78kg",
                  "date": "06/08/2019 03:46"
                },
                {
                  "id": 13,
                  "price": "R$ 13.6",
                  "size": "39kg",
                  "date": "24/08/2018 07:37"
                },
                {
                  "id": 14,
                  "price": "R$ 10.2",
                  "size": "45kg",
                  "date": "22/06/2016 04:34"
                },
                {
                  "id": 15,
                  "price": "R$ 13.0",
                  "size": "69kg",
                  "date": "21/01/2019 08:52"
                },
                {
                  "id": 16,
                  "price": "R$ 3.2",
                  "size": "86kg",
                  "date": "16/09/2014 03:30"
                },
                {
                  "id": 17,
                  "price": "R$ 13.6",
                  "size": "96kg",
                  "date": "20/12/2015 06:09"
                },
                {
                  "id": 18,
                  "price": "R$ 19.2",
                  "size": "33kg",
                  "date": "03/04/2016 09:46"
                },
                {
                  "id": 19,
                  "price": "R$ 2.4",
                  "size": "22kg",
                  "date": "08/06/2015 04:10"
                },
                {
                  "id": 20,
                  "price": "R$ 17.9",
                  "size": "88kg",
                  "date": "02/10/2019 11:23"
                },
                {
                  "id": 21,
                  "price": "R$ 17.5",
                  "size": "59kg",
                  "date": "31/10/2014 12:23"
                },
                {
                  "id": 22,
                  "price": "R$ 13.3",
                  "size": "22kg",
                  "date": "20/03/2016 01:08"
                },
                {
                  "id": 23,
                  "price": "R$ 10.6",
                  "size": "83kg",
                  "date": "20/10/2014 06:44"
                },
                {
                  "id": 24,
                  "price": "R$ 16.3",
                  "size": "86kg",
                  "date": "02/01/2014 10:31"
                },
                {
                  "id": 25,
                  "price": "R$ 9.1",
                  "size": "37kg",
                  "date": "09/11/2014 03:13"
                },
                {
                  "id": 26,
                  "price": "R$ 18.0",
                  "size": "83kg",
                  "date": "12/06/2015 11:24"
                },
                {
                  "id": 27,
                  "price": "R$ 18.3",
                  "size": "24kg",
                  "date": "12/02/2014 03:59"
                },
                {
                  "id": 28,
                  "price": "R$ 2.5",
                  "size": "37kg",
                  "date": "02/08/2018 09:04"
                },
                {
                  "id": 29,
                  "price": "R$ 2.7",
                  "size": "62kg",
                  "date": "28/03/2019 09:23"
                },
                {
                  "id": 30,
                  "price": "R$ 15.7",
                  "size": "36kg",
                  "date": "10/02/2017 06:27"
                },
                {
                  "id": 31,
                  "price": "R$ 4.8",
                  "size": "56kg",
                  "date": "19/06/2014 06:51"
                },
                {
                  "id": 32,
                  "price": "R$ 17.3",
                  "size": "39kg",
                  "date": "20/08/2016 06:38"
                },
                {
                  "id": 33,
                  "price": "R$ 17.2",
                  "size": "37kg",
                  "date": "11/12/2017 06:10"
                },
                {
                  "id": 34,
                  "price": "R$ 1.4",
                  "size": "51kg",
                  "date": "09/02/2015 01:26"
                },
                {
                  "id": 35,
                  "price": "R$ 2.7",
                  "size": "44kg",
                  "date": "24/03/2019 03:28"
                },
                {
                  "id": 36,
                  "price": "R$ 5.9",
                  "size": "25kg",
                  "date": "26/04/2016 05:20"
                },
                {
                  "id": 37,
                  "price": "R$ 11.0",
                  "size": "66kg",
                  "date": "16/05/2015 03:01"
                },
                {
                  "id": 38,
                  "price": "R$ 13.0",
                  "size": "81kg",
                  "date": "24/03/2018 03:51"
                },
                {
                  "id": 39,
                  "price": "R$ 15.9",
                  "size": "57kg",
                  "date": "20/03/2014 03:42"
                },
                {
                  "id": 40,
                  "price": "R$ 18.9",
                  "size": "70kg",
                  "date": "25/04/2018 06:24"
                },
                {
                  "id": 41,
                  "price": "R$ 6.7",
                  "size": "92kg",
                  "date": "10/08/2016 07:37"
                },
                {
                  "id": 42,
                  "price": "R$ 2.1",
                  "size": "59kg",
                  "date": "17/09/2014 10:12"
                },
                {
                  "id": 43,
                  "price": "R$ 15.6",
                  "size": "64kg",
                  "date": "20/01/2019 05:40"
                },
                {
                  "id": 44,
                  "price": "R$ 4.7",
                  "size": "31kg",
                  "date": "12/05/2015 11:24"
                },
                {
                  "id": 45,
                  "price": "R$ 15.4",
                  "size": "28kg",
                  "date": "25/12/2014 03:34"
                },
                {
                  "id": 46,
                  "price": "R$ 15.0",
                  "size": "59kg",
                  "date": "29/06/2018 04:27"
                },
                {
                  "id": 47,
                  "price": "R$ 7.0",
                  "size": "64kg",
                  "date": "02/08/2014 02:44"
                },
                {
                  "id": 48,
                  "price": "R$ 13.8",
                  "size": "98kg",
                  "date": "19/08/2016 05:54"
                },
                {
                  "id": 49,
                  "price": "R$ 11.2",
                  "size": "90kg",
                  "date": "14/12/2017 08:03"
                }
              ]        
      }

  return (
    <View style={styles.container}>
        <Text style={styles.header}>
           Histórico das transações
        </Text>
        <HistoricList data={fakeData.historic} />
    </View>
  );
}
