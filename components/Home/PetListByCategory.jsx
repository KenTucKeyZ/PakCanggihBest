import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Category from './Category'
import { getDocs } from 'firebase/firestore'
import { collection, query, where } from 'firebase/firestore'
import {db} from '../../config/FirebaseConfig'
import PetListItem from './PetListItem'
export default function PetListByCategory() {

  const[petList, setPetList]=useState([]);
  const[loader, setLoader]=useState(false);
  useEffect(()=>{
    GetPetList('Dogs')
  },[])
  /**Used to get petlist one category selection
   * @param {*} category
   */
  const GetPetList=async(category)=>{
    setPetList([]);
    const q=query(collection(db,'Pets'), where('category', '==',category));
    const querySnapshot=await getDocs(q);

    querySnapshot.forEach(doc=>{

      setPetList(petList=>[...petList,doc.data()])
    })
    setLoader(false);
  }


  return (
    <View>
      <Category category={(value)=>GetPetList(value)}/>
      <FlatList
        data={petList}
        horizontal={true}
        refreshing={loader}
        onRefresh={()=> GetPetList('Dogs')}
        style={{marginTop:10}}
        renderItem={({item,index})=>(

          <PetListItem pet={item}/>
        )}
      />
    </View>
  )
}