// IDLE STATE

var idle = {}

idle.enter = function(owner) {
	owner.startFrame = 1;
	owner.endFrame = 1;
	owner.currentFrame = owner.startFrame;
	owner.frameTimeSeconds = 1 / 4;
}

idle.update = function(owner, elapsedTime) {
	// do nothing
}

// WALK SOUTH STATE

var walkSouth = {}

walkSouth.enter = function(owner) {
	owner.startFrame = 0;
	owner.endFrame = 2;
	owner.currentFrame = owner.startFrame;
	owner.frameTimeSeconds = 1 / 15;
}

walkSouth.update = function(owner, elapsedTime) {
	owner.y += owner.speed * elapsedTime;
}


// WALK WEST STATE

var walkWest = {}

walkWest.enter = function(owner) {
	owner.startFrame = 3;
	owner.endFrame = 5;
	owner.currentFrame = owner.startFrame;
	owner.frameTimeSeconds = 1 / 15;
}

walkWest.update = function(owner, elapsedTime) {
	owner.x -= owner.speed * elapsedTime;
}

// WALK EAST STATE

var walkEast = {}

walkEast.enter = function(owner) {
	owner.startFrame = 6;
	owner.endFrame = 8;
	owner.currentFrame = owner.startFrame;
	owner.frameTimeSeconds = 1 / 15;
}

walkEast.update = function(owner, elapsedTime) {
	owner.x += owner.speed * elapsedTime;
}

// WALK NORTH STATE

var walkNorth = {}

walkNorth.enter = function(owner) {
	owner.startFrame = 9;
	owner.endFrame = 11;
	owner.currentFrame = owner.startFrame;
	owner.frameTimeSeconds = 1 / 15;
}

walkNorth.update = function(owner, elapsedTime) {
	owner.y -= owner.speed * elapsedTime;
}
