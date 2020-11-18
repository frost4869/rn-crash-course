
#import "Calculator.h"
#import <React/RCTLog.h>

@implementation CalculatorManager

// To export a module named CalendarManager
RCT_EXPORT_MODULE();

// This would name the module AwesomeCalendarManager instead
// RCT_EXPORT_MODULE(AwesomeCalendarManager);

RCT_EXPORT_METHOD(callNative:(RCTResponseSenderBlock)callbackFunction)
{
  RCTLogInfo(@"YOU CALL NATIVE CODE");
  callbackFunction(@[@"FROM NATIVE CODE WITH LOVE"]);
}

@end
