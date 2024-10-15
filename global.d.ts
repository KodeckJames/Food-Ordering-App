// global.d.ts
import 'react-native';

declare module 'react-native' {
  interface ViewProps {
    className?: string;  // Adding className prop to View
  }

  interface TextProps {
    className?: string;  // Adding className prop to Text
  }
  
  interface ImageProps {
    className?: string;  // Adding className prop to Text
  }

  // Other component interfaces can be added here
}
