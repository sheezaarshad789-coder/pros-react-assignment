import ProductCard from './components/productcard';
import Card from './components/card';
import mouseImage from './assets/mouse.jpg';
import keyboardImage from './assets/keyboard.jpg';
import usbImage from './assets/usb.jpg';
import laptopStandImage from './assets/images.jpg';
import cameraImage from './assets/camera.jpg';

function App() {
  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <h1>React Props Assignment</h1>

      {/* Task 1: ProductCard with Props */}
      <h2>Task 1: Product Card</h2>
      <ProductCard
        productName="Wireless Mouse"
        price={25}
        inStock={true}
        image={mouseImage}
      />
      <ProductCard
        productName="Mechanical Keyboard"
        price={85}
        inStock={false}
        image={keyboardImage}
      />
      <ProductCard
        productName="USB-C Hub"
        price={35}
        inStock={true}
        image={usbImage}
      />
      <ProductCard
        productName="Laptop Stand"
        price={45}
        inStock={true}
        image={laptopStandImage}
      />
      <ProductCard
        productName="HD Webcam"
        price={60}
        inStock={false}
        image={cameraImage}
      />

      {/* Task 3: Custom Card Component utilizing props.children (3 Varied Layouts) */}
      <h2>Task 3: Custom Card Container (props.children)</h2>

      {/* Layout 1 */}
      <Card>
        <h3>Text Content</h3>
        <p>Yeh simple text card layout hai.</p>
      </Card>

      {/* Layout 2 */}
      <Card>
        <h3>User Profile</h3>
        <p><strong>Name:</strong> Ali Hassan</p>
        <p><strong>City:</strong> Karachi</p>
      </Card>

      {/* Layout 3 */}
      <Card>
        <h3>Call To Action</h3>
        <button style={{ padding: '8px 12px', cursor: 'pointer' }}>Click Me</button>
      </Card>
    </div>
  );
}

export default App;