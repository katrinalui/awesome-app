import React from 'react';
import { Text, TextInput, Image, View, Button } from 'react-native';

class Dog extends React.Component {
  constructor(props) {
    super(props);
    this.state = { breed: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    this.props.requestDog(this.state.breed);
  }

  render() {
    let dogView = <View></View>;

    if (this.props.dog_url) {
      dogView =
        <Image
          style={{width: 500, height: 250}}
          source={{uri: this.props.dog_url}}
        />;
    }

    return (
      <View style={{marginTop: 50}}>
        <TextInput
          style={{margin: 15, borderColor: "gray", borderBottomWidth: 1}}
          onChangeText={breed => this.setState({breed})}
          value={this.state.breed}
          placeholder="Enter a dog breed"
        />
      <Button
        onPress={this.handleSubmit}
        title="Submit"
      />

      { dogView }
      </View>
    );
  }
}

export default Dog;
