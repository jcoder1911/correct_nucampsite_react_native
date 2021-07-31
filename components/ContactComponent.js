import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';


class Contact extends Component {
    constructor(props) {
        super(props);
    }

    static navigationOptions = {
        title: 'Contact Us'
    }

    render() {
        return(
            <ScrollView>
                <Card title="Contact Information">
                    <Text>
                    1 Nucamp Way
                            Seattle, WA 98001
                            U.S.A.

                            Phone: 1-206-555-1234
                            Email: campsites@nucamp.co
                    </Text>
                </Card>
            </ScrollView>
        );
    }

}

export default Contact;