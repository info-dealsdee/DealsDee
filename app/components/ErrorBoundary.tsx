'use client';

import React from 'react';
import Button from './Button';

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ComponentType<{ error?: Error; retry: () => void }>;
}

export class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      const FallbackComponent = this.props.fallback || DefaultErrorFallback;
      
      return (
        <FallbackComponent
          error={this.state.error}
          retry={() => this.setState({ hasError: false, error: undefined })}
        />
      );
    }

    return this.props.children;
  }
}

function DefaultErrorFallback({ 
  error, 
  retry 
}: { 
  error?: Error; 
  retry: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] px-6">
      <div className="text-center max-w-md">
        <div className="text-6xl mb-4">😞</div>
        <h2 className="text-2xl font-bold text-text-primary mb-3">
          เกิดข้อผิดพลาด
        </h2>
        <p className="text-text-secondary mb-6 leading-relaxed">
          ขออภัยครับ เกิดปัญหาบางอย่างขึ้น กรุณาลองใหม่อีกครั้ง
        </p>
        {process.env.NODE_ENV === 'development' && error && (
          <details className="text-left mb-6 p-4 bg-gray-100 rounded-lg text-sm">
            <summary className="cursor-pointer font-semibold mb-2">
              รายละเอียดข้อผิดพลาด (Development Only)
            </summary>
            <pre className="whitespace-pre-wrap text-red-600">
              {error.message}
            </pre>
          </details>
        )}
        <Button onClick={retry} variant="primary">
          ลองใหม่อีกครั้ง
        </Button>
      </div>
    </div>
  );
}

// Specific error boundaries for different sections
export function CardErrorBoundary({ children }: { children: React.ReactNode }) {
  return (
    <ErrorBoundary fallback={CardErrorFallback}>
      {children}
    </ErrorBoundary>
  );
}

function CardErrorFallback({ retry }: { retry: () => void }) {
  return (
    <div className="bg-white rounded-2xl shadow-card overflow-hidden h-full flex flex-col items-center justify-center p-6">
      <div className="text-4xl mb-3">😞</div>
      <h3 className="font-semibold text-text-primary mb-2">โหลดไม่ได้</h3>
      <p className="text-sm text-text-secondary mb-4 text-center">
        ไม่สามารถโหลดเนื้อหานี้ได้
      </p>
      <Button onClick={retry} variant="secondary" className="text-xs px-3 py-2">
        ลองใหม่
      </Button>
    </div>
  );
}