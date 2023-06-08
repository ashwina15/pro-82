import React, { Component } from "react";
import {
RFValue,
Ionicons,
View
} from "react-native";

render(){
    return (
        <View style={styles.container}>
            <View style={styles.cardContainer}>
                <View style={styles.authorContainer}>
                    <View style={styles.authorImageContainer}>
                        <Image 
                        source={require("..assests/profile_img.png")}
                        styles={styles.profileImage}
                        ></Image>
                        </View>
                        <View style={styles.authorNameContainer}>
                            <Text style={styles.authorNameText}>{this.props.post.author}</Text>
                            </View>
                            </View>
                            <Image source={require("../assets/post.jpeg")} style={styles.postImage}/>
                            <View style={styles.captionContainer}>
                                <Text style={styles.captionText}>
                                    {this.props.post.caption}
                                </Text>
                            </View>
                            <View style={styles.actionContainer}>
                                <View style={styles.likeButton}>
                                <Ionicons name={"heart"} sizw={RFValue(30)} color={"white"} />
                                <Text style={styles.likeText}>12k</Text>
                                </View>
                            </View>
                            </View>
                            </View>
    );
}