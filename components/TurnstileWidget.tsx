"use client";

import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";

interface TurnstileWidgetProps {
  action?: string;
  onVerify: (token: string) => void;
  onExpire?: () => void;
}

export interface TurnstileWidgetHandle {
  execute: () => void;
  reset: () => void;
}

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: HTMLElement,
        options: {
        sitekey: string;
        action?: string;
        callback: (token: string) => void;
        "expired-callback"?: () => void;
        size?: "normal" | "compact" | "invisible";
        }
      ) => string;
      execute?: (widgetId: string) => void;
      reset?: (widgetId: string) => void;
      remove?: (widgetId: string) => void;
    };
  }
}

export const TurnstileWidget = forwardRef<
  TurnstileWidgetHandle,
  TurnstileWidgetProps
>(function TurnstileWidget(
  { action, onVerify, onExpire }: TurnstileWidgetProps,
  ref,
) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const widgetIdRef = useRef<string | null>(null);

  useEffect(() => {
    const scriptId = "cf-turnstile-script";
    if (document.getElementById(scriptId)) return;

    const script = document.createElement("script");
    script.id = scriptId;
    script.src =
      "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
  }, []);

  useEffect(() => {
    const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
    if (!siteKey) {
      console.warn(
        "Missing NEXT_PUBLIC_TURNSTILE_SITE_KEY env var for Turnstile.",
      );
      return;
    }

    let cancelled = false;

    const renderWidget = () => {
      if (cancelled || !containerRef.current) return;

      if (window.turnstile?.render) {
        widgetIdRef.current = window.turnstile.render(containerRef.current, {
          sitekey: siteKey,
          action,
          size: "invisible",
          callback: (token: string) => {
            onVerify(token);
          },
          "expired-callback": () => {
            onExpire?.();
          },
        });
      } else {
        setTimeout(renderWidget, 200);
      }
    };

    renderWidget();

    return () => {
      cancelled = true;
      if (widgetIdRef.current && window.turnstile?.remove) {
        window.turnstile.remove(widgetIdRef.current);
      }
    };
  }, [action, onExpire, onVerify]);

  useImperativeHandle(
    ref,
    () => ({
      execute() {
        if (widgetIdRef.current && window.turnstile?.execute) {
          window.turnstile.execute(widgetIdRef.current);
        }
      },
      reset() {
        if (widgetIdRef.current && window.turnstile?.reset) {
          window.turnstile.reset(widgetIdRef.current);
        }
      },
    }),
    [],
  );

  return (
    <div
      ref={containerRef}
      style={{
        width: 0,
        height: 0,
        overflow: "hidden",
      }}
    />
  );
});
