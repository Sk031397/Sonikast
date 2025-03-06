import { Button } from "@/components/ui/button";
import { useWallet } from "@/providers/wallet-provider";
import { Loader2 } from "lucide-react";

export function ConnectWallet() {
  const { connect, disconnect, isConnected, isConnecting, address } = useWallet();

  return (
    <div>
      {isConnected ? (
        <Button variant="outline" onClick={disconnect} className="bg-blue-600 hover:bg-blue-700">
          {address?.slice(0, 6)}...{address?.slice(-4)}
        </Button>
      ) : (
        <Button
          onClick={connect}
          disabled={isConnecting}
          className="bg-blue-600 hover:bg-blue-700"
        >
          {isConnecting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Connecting...
            </>
          ) : (
            'Connect to Sonic'
          )}
        </Button>
      )}
    </div>
  );
}