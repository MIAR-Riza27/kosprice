import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log error details
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background-secondary to-background-tertiary dark:from-background-dark dark:to-background-dark-secondary px-4">
          <div className="text-center p-8 bg-white/90 dark:bg-background-dark/90 backdrop-blur-sm rounded-2xl shadow-2xl max-w-lg border border-gray-200/50 dark:border-secondary-700/50">
            {/* Error Icon */}
            <div className="w-20 h-20 bg-gradient-to-br from-error-500 to-error-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>

            {/* Error Content */}
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">
              Oops! Terjadi Kesalahan
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Aplikasi mengalami error yang tidak terduga. Jangan khawatir, tim kami akan segera memperbaikinya!
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button 
                onClick={() => window.location.reload()}
                className="px-6 py-3 bg-gradient-to-br from-primary-500 to-primary-600 text-white rounded-xl hover:from-primary-400 hover:to-primary-500 transition-all duration-300 transform hover:scale-105 shadow-lg font-medium"
              >
                🔄 Muat Ulang Halaman
              </button>
              <button 
                onClick={() => window.location.href = '/'}
                className="px-6 py-3 bg-gray-200 dark:bg-secondary-700 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-300 dark:hover:bg-secondary-600 transition-all duration-300 transform hover:scale-105 shadow-lg font-medium"
              >
                Kembali ke Beranda
              </button>
            </div>

            {/* Developer Info (hanya tampil di development) */}
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mt-6 text-left">
                <summary className="cursor-pointer text-error-600 dark:text-error-400 font-medium mb-2">
                  Error Details (Development Only)
                </summary>
                <div className="bg-error-50 dark:bg-error-900/20 p-4 rounded-lg border border-error-200 dark:border-error-800 text-sm">
                  <p className="font-semibold text-error-800 dark:text-error-200 mb-2">
                    {this.state.error && this.state.error.toString()}
                  </p>
                  <pre className="text-error-700 dark:text-error-300 text-xs overflow-auto">
                    {this.state.errorInfo.componentStack}
                  </pre>
                </div>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;