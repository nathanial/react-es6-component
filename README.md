# React ES6 Component
  This component binds its methods, like the old-style React.createClass, so that "this" points to the right thing.

## Usage
```javascript
import Component from 'react-es6-component';
class MyComponent extends Component {
  render(){
    return (
      <div>
        <button onClick={this._magicAutoboundMethod} />
      </div>
    );
  }

  _magicAutoboundMethod(){
    this.setState({
      foo: 'bar'
    });
  }
}
```
