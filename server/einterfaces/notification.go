// Copyright (c) 2015-present Tam Dev, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

package einterfaces

import (
	"github.com/mattermost/mattermost/server/public/model"
)

type NotificationInterface interface {
	GetNotificationMessage(ack *model.PushNotificationAck, userID string) (*model.PushNotification, *model.AppError)
	CheckLicense() *model.AppError
}
