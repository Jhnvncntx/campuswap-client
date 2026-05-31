import { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    console.error('ErrorBoundary caught:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center flex-col gap-4">
          <p className="text-red-500 font-medium">Something went wrong.</p>
          <p className="text-gray-400 text-sm">{this.state.error?.message}</p>
          <button
            onClick={() => window.location.href = '/'}
            className="text-green-600 text-sm hover:underline"
          >
            Go home
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;