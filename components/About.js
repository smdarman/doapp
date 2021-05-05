import React from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native';

export const About = () => {
    return (
        <div>
            <View style={styles.abt}>
            <Text style={styles.baseText}>   
              
              {"\n"}
{"\n"}
<Text style={styles.titleText}> <strong >What is Run do it?</strong></Text>

{"\n"}
{"\n"}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer varius dui libero. Vestibulum faucibus nulla sed turpis auctor, ac malesuada tortor egestas. Aenean dignissim vel dui non pellentesque. Suspendisse porttitor nibh urna, luctus viverra nibh viverra non. Phasellus egestas metus lectus, quis pellentesque elit euismod ut. Morbi id neque in orci commodo sagittis a condimentum eros. Curabitur eu purus at quam viverra aliquam ac non massa. Donec convallis bibendum metus, a consectetur turpis vestibulum vitae. Proin quis ultricies ante. Aenean id fringilla sapien. Nulla facilisi. Nullam eu lorem massa. Phasellus congue, risus vel varius vehicula, orci diam venenatis mauris, nec dictum ipsum ipsum a quam. Suspendisse at sem euismod, euismod metus non, laoreet turpis. Etiam turpis diam, sodales vel odio eget, pellentesque fermentum eros. Aliquam erat volutpat.

Vestibulum scelerisque congue vehicula. Mauris lorem tellus, porta sollicitudin ultrices id, suscipit a sapien. Donec vel velit eu erat suscipit euismod. Etiam non congue tortor. Vivamus suscipit accumsan dui, at dignissim risus blandit a. Pellentesque ultrices tempus odio, at eleifend nisi ornare vel. Fusce vel pellentesque diam.
{"\n"}
{"\n"}

Nullam pellentesque nulla mi, suscipit scelerisque urna fermentum ac. In et venenatis augue, nec tempus enim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec aliquet ut tortor vel dictum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc non ultrices enim, at tristique tellus. Nunc aliquam velit sed dui molestie, vitae maximus erat consectetur. Quisque semper vehicula eros ut vehicula. Donec accumsan, nisl eget eleifend laoreet, lacus erat placerat diam, non ornare sapien magna in ligula. Aenean tempor nulla ac tellus hendrerit lacinia. Curabitur orci est, feugiat sit amet mauris ut, aliquam rhoncus tortor. In hac habitasse platea dictumst. Duis pharetra semper nisi, nec mattis enim ultrices sit amet.

Maecenas eleifend velit eget tortor ornare, nec tempor lacus sollicitudin. Sed vitae libero mollis, vulputate dolor sit amet, bibendum augue. Vestibulum fermentum arcu odio, et porta urna ultricies a. Maecenas ullamcorper metus eu ante posuere tempus. Donec accumsan non lorem non finibus. Praesent cursus erat eget volutpat congue. Vivamus malesuada justo eros, in vulputate tellus ullamcorper interdum.
{"\n"}
{"\n"}

Integer pellentesque, ante ut rhoncus maximus, dolor lectus gravida massa, et facilisis metus ipsum ac enim. Etiam sagittis eu orci et venenatis. Fusce pretium nisi neque, sed iaculis sem laoreet nec. Fusce dapibus velit non iaculis auctor. Aliquam pretium finibus interdum. Mauris facilisis urna vel fringilla luctus. Quisque auctor blandit lectus at tincidunt. Suspendisse semper metus auctor suscipit laoreet. Aliquam tempor ullamcorper urna vel dignissim.
              </Text>      
              </View>
        </div>
    )
}

const styles = StyleSheet.create({
    container: {
backgroundColor: "tomato",
    },
    baseText: {
      fontFamily: "Arial",
      textAlign: 'center',
    //   backgroundColor: 'tomato'
      
    },
    titleText: {
      fontSize: 30,
      fontWeight: "bold",
      textAlign: "center"
    
    }, 
    abt: {
        backgroundColor: "coral"
      }

  });