// * Import required modules/dependencies
import React, {Component} from 'react';
import {ScrollView, StyleSheet, View, Linking, TextInput} from 'react-native';
import {
  Text,
  Header,
  Card,
  ListItem,
  Overlay,
  CheckBox,
  Input,
  Button,
  Icon,
} from 'react-native-elements';

// * Import all store related stuffs

// * Import all screens/components

// * Import utilites

// * Import all styling stuffs
import mainStyles from '../../styles/mainStyle';
import variables from '../../styles/variables';

class HelpScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aboutOverlay: false,
      feedbackOverlay: false,
      responseType: 'feedback',
    };
  }

  toggleModal = modal => {
    this.setState({[modal]: !this.state[modal]});
  };

  render() {
    return (
      <View>
        <Header
          leftComponent={
            <Icon
              type="font-awesome"
              name="bars"
              size={20}
              color="#FFF"
              onPress={() => {
                this.props.navigation.toggleDrawer();
              }}
            />
          }
          centerComponent={{
            text: 'Help Center',
            style: {color: '#fff'},
          }}
          rightComponent={
            <Icon type="font-awesome" name="question" color="#FFF" size={30} />
          }
          containerStyle={{
            backgroundColor: '#933dd4',
            justifyContent: 'space-around',
          }}
        />
        <ScrollView>
          <View style={mainStyles.container}>
            <Card title="Contact Us">
              <ListItem
                title="Email Us"
                leftAvatar={
                  <Icon
                    type="font-awesome"
                    name="at"
                    color={variables.mainThemeColor}
                    size={30}
                  />
                }
                chevron
                bottomDivider
                onPress={() => {
                  Linking.openURL('mailto://somethingemail@gmail.com');
                }}
              />
              <ListItem
                title="About Us"
                leftAvatar={
                  <Icon
                    type="font-awesome"
                    name="info"
                    color={variables.mainThemeColor}
                    size={30}
                  />
                }
                chevron
                bottomDivider
                onPress={() => {
                  this.toggleModal('aboutOverlay');
                }}
              />
              <ListItem
                title="Send Feedback"
                leftAvatar={
                  <Icon
                    type="font-awesome"
                    name="comment"
                    color={variables.mainThemeColor}
                    size={30}
                  />
                }
                onPress={() => {
                  this.toggleModal('feedbackOverlay');
                }}
                chevron
              />
            </Card>
          </View>
        </ScrollView>

        <Overlay
          isVisible={this.state.aboutOverlay}
          width="90%"
          height="auto"
          borderRadius={8}>
          <View>
            <View style={{flexDirection: 'row', marginBottom: 20}}>
              <View style={mainStyles.col8}>
                <Text h4>About Us</Text>
              </View>
              <View style={mainStyles.col4}>
                <View style={{alignItems: 'flex-end'}}>
                  <Icon
                    type="font-awesome"
                    name="times"
                    color="#ababab"
                    size={20}
                    onPress={() => {
                      this.toggleModal('aboutOverlay');
                    }}
                  />
                </View>
              </View>
            </View>
            <View>
              <Text style={{padding: 10}}>
                Nisi fugiat eiusmod cupidatat consequat culpa tempor adipisicing
                consequat veniam non incididunt eu. Ad nisi sunt elit non et
                voluptate aliquip exercitation ipsum incididunt sint nulla.
                Tempor voluptate est laboris id. Aute in adipisicing deserunt
                fugiat aliqua.
              </Text>
            </View>
          </View>
        </Overlay>

        <Overlay
          isVisible={this.state.feedbackOverlay}
          width="90%"
          height="auto"
          borderRadius={8}>
          <View>
            <View style={{flexDirection: 'row', marginBottom: 20}}>
              <View style={mainStyles.col8}>
                <Text h4>Send Response</Text>
              </View>
              <View style={mainStyles.col4}>
                <View style={{alignItems: 'flex-end'}}>
                  <Icon
                    type="font-awesome"
                    name="times"
                    color="#ababab"
                    size={20}
                    onPress={() => {
                      this.toggleModal('feedbackOverlay');
                    }}
                  />
                </View>
              </View>
            </View>
            <View>
              <Input
                label="Type of Response"
                inputContainerStyle={{borderBottomColor: 'transparent'}}
                inputComponent={() => (
                  <View style={{flexDirection: 'row'}}>
                    <View style={mainStyles.col6}>
                      <CheckBox
                        containerStyle={{
                          backgroundColor: 'transparent',
                          borderColor: 'transparent',
                        }}
                        center
                        title="Feedback"
                        checkedIcon="dot-circle-o"
                        uncheckedIcon="circle-o"
                        checked={this.state.responseType === 'feedback'}
                        onPress={() => {
                          this.setState({
                            responseType: 'feedback',
                          });
                        }}
                      />
                    </View>
                    <View style={mainStyles.col6}>
                      <CheckBox
                        containerStyle={{
                          backgroundColor: 'transparent',
                          borderColor: 'transparent',
                        }}
                        center
                        title="Complaint"
                        checkedIcon="dot-circle-o"
                        uncheckedIcon="circle-o"
                        checked={this.state.responseType === 'complaint'}
                        onPress={() => {
                          this.setState({
                            responseType: 'complaint',
                          });
                        }}
                      />
                    </View>
                  </View>
                )}
              />
              <TextInput
                label="description"
                placeholder={`Write your ${
                  this.state.responseType === 'feedback'
                    ? 'feedback'
                    : 'complaint'
                } here...`}
                style={{
                  width: '100%',
                  borderColor: 'transparent',
                }}
                multiline={true}
                numberOfLines={4}
              />
              <Button title="Submit" raised type="outline" />
            </View>
          </View>
        </Overlay>
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export default HelpScreen;
