import React,{Component} from 'react'
import { View, Text, Image } from 'react-native';

class Status extends Component {
    render() {
        return (
            <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>
                    Status Will Be displayed here
                </Text>
                <Image
                    source={require("./status.jpg")}
                    style={{
                        width: 300,
                        height: 300,
                        borderRadius: 10
                    }}
                />
            </View>
        );
    }
}

export default Status