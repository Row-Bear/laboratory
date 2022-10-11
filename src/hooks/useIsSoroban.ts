import { useRedux } from "hooks/useRedux";

const futureNetUrl = "https://horizon-futurenet.stellar.org";
const futureNetPassphrase = "Test SDF Future Network ; October 2022";

export const useIsSoroban = () => {
  const { network } = useRedux("network", "routing");
  const { horizonURL, networkPassphrase } = network.current;

  let isOnFuturenet = false;
  if (
    horizonURL === futureNetUrl &&
    networkPassphrase === futureNetPassphrase
  ) {
    isOnFuturenet = true;
  }
  return isOnFuturenet;
};
