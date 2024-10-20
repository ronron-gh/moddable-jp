/*---
description: 
flags: [async, module]
---*/

import WiFi from "wifi";
import Timer from "timer";

if (WiFi.Mode.station !== WiFi.mode) {
	WiFi.mode = WiFi.Mode.station;
	Timer.delay(3000);
}

WiFi.scan({hidden: false}, ap => {
	if (!ap)
		return $DONE();
	
	try {
		assert.sameValue(ap.hidden, false, "shouldn't find hidden ssid");
	}
	catch (e) {
		$DONE(e);
	}
});

$TESTMC.timeout($TESTMC.wifiScanTimeout);
