function throwErrorSync() {
    try {
    console.log("Starting synchronous operation...");
    throw new Error("Something went wrong during the synchronous operation!");
    }catch (error) {
    console.log("Caught synchronous error:", error.message);
    }finally {
    console.log("Synchronous operation cleanup...");
    }
}
function throwErrorAsync() {
console.log("Starting asynchronous operation...");
return new Promise((resolve, reject) => {
setTimeout(() => {
    reject(new Error("Something went wrong during the asynchronous operation!"));
}, 1000);
});
}
async function handleAsyncError() {
try {
    await throwErrorAsync();
} catch (error) {
    console.log("Caught asynchronous error:", error.message);
} finally {
    console.log("Asynchronous operation cleanup...");
}
}
function customErrorFunction() {
try {
    let age = -5;
    if (age < 0) {
    throw new InvalidAgeError("Age cannot be negative!");
    }
    console.log("Age is valid:", age);
} catch (error) {
if (error instanceof InvalidAgeError) {
    console.log("Caught custom error:", error.message);
} else {
    console.log("Caught unexpected error:", error.message);
}
} finally {
console.log("Custom error check complete.");
}
}
class InvalidAgeError extends Error {
constructor(message) {
    super(message);
    this.name = "InvalidAgeError";
}
}
throwErrorSync();
handleAsyncError();
customErrorFunction();
