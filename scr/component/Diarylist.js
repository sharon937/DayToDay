import React from "react";
import { FlatList } from "react-native";

import Diarydetail from "./Diarydetail";

const Diarylist =({list}) =>{
    
    const renderItem =({item}) =><Diarydetail album={item}/>;

    return(
        <FlatList
            data={list}
            renderItem={renderItem}
            keyExtractor={item => item.title}
        />
    );
}

export default Diarylist;
