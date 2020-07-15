import React, { Component } from 'react';
import 
{
  TouchableWithoutFeedback, 
  Text, 
  View, 
  DeviceEventEmitter
} from 'react-native';
import Style from './Style';
import { AppTour, AppTourSequence, AppTourView } from 'imokhles-react-native-app-tour';

class Footer extends Component {
  constructor(props){
    super(props);
    this.appTourTargets = []
    this.selected = this.props.selectedPage;
    this.registerSequenceStepEvent()
    this.registerFinishSequenceEvent()
  }

  componentDidMount() {
    setTimeout(() => {
      let appTourSequence = new AppTourSequence()
      this.appTourTargets.forEach(appTourTarget => {
        appTourSequence.add(appTourTarget)
      })
      AppTour.ShowSequence(appTourSequence)
    }, 1000)
  }

  registerSequenceStepEvent = () => {
    if (this.sequenceStepListener) {
      this.sequenceStepListener.remove()
    }
    this.sequenceStepListener = DeviceEventEmitter.addListener(
      'onShowSequenceStepEvent',
      (e) => {
        console.log(e)
      }
    )
  }

  registerFinishSequenceEvent = () => {
    if (this.finishSequenceListener) {
      this.finishSequenceListener.remove()
    }
    this.finishSequenceListener = DeviceEventEmitter.addListener(
      'onFinishSequenceEvent',
      (e) => {
        console.log(e);
      }
    );
  }

  navigation = (pageName) => {
    this.props.navigation.navigate(pageName);
  };

  addAppTourTarget = (appTourTarget) => {
    this.appTourTargets.push(appTourTarget)
  };

  returnButtonComponent = (
    textStyle,
    btStyle,
    btName,
    navigationPage,
    addAppTourTarget,
    order
  ) => {
    return (
      <TouchableWithoutFeedback
        key={btName}
        ref={ref => {
          if (!ref) return
          const props = {
            order: order,
            title: `This is ${btName} Page Button`,
            description: `Click This to go to the ${btName} Page`,
            outerCircleColor: "#3f52ae"
          }
          addAppTourTarget &&
            addAppTourTarget(AppTourView.for(ref, { ...props }))
        }}
        onPress={() => {
          this.navigation(navigationPage);
        }}
      >
        <View style={[Style.ftButton, btStyle]}>
          <Text style={[Style.ftButtonText, textStyle]}>{btName}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  render() {
    return (
      <View style={Style.footerContainer}>
        {this.selected === 'homePage'
          ? this.returnButtonComponent(
              Style.textSelected,
              Style.selectedBt,
              'Home',
              'afterAuthSuccesss',
              this.addAppTourTarget,
              11
            )
          : this.returnButtonComponent(
              Style.textUnSelected,
              Style.unSelectedBt,
              'Home',
              'afterAuthSuccesss',
              this.addAppTourTarget,
              11
            )}
        {this.selected === 'status'
          ? this.returnButtonComponent(
              Style.textSelected,
              Style.selectedBt,
              'Status',
              'Status',
              this.addAppTourTarget,
              21
            )
          : this.returnButtonComponent(
              Style.textUnSelected,
              Style.unSelectedBt,
              'Status',
              'Status',
              this.addAppTourTarget,
              21
            )}
  
      </View>
    );
  }


}

export default Footer;