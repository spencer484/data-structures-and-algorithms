# Hashtables
Hash Table also further improves on the Linked List. Hash Table is a higher level data structure: it uses other data structures to form another data structure. Hash table uses an array that will act as specific keys to put in new objects. Every time an object wants to be inserted or searched, it first goes through a hashing function which will determine its location in the Array. By using a Hash Table we can cut down a super long Linked List into smaller Linked List. With a hashing function, we would know to go to which Linked List to find the particular value or insert a particular value. If we had an Array of 26 possible spots, we can technically break down a single Linked List into 26 smaller ones. Our goal should be to find a hashing function that will normalize the long Linked List out evenly across the available spots in the Array.

## Challenge
Implement a Hashtable with the following methods:

```add```: takes in both the key and value. This method should hash the key, and add the key and value pair to the table, handling collisions as needed.

```get```: takes in the key and returns the value from the table.

```contains```: takes in the key and returns a boolean, indicating if the key exists in the table already.

```hash```: takes in an arbitrary key and returns an index in the collection.

## Approach & Efficiency
Because arrays are unordered we would have to perform linear search, which would take N steps. By converting an array into a hash table, we can go from O(N) searches to O(1) searches. With their O(1) reads and insertions, it's a difficult data structure to beat.

## API

**Add()**
When adding a new key/value pair to a hashtable:

1. send the key to the ```GetHash``` method.

2. Once you determine the index of where it should be placed, go to that index

3. Check if something exists at that index already, if it doesn’t, add it with the key/value pair.

4. If something does exist, add the new key/value pair to the data structure within that bucket.

**Find()**
The Find takes in a key, gets the Hash, and goes to the index location specified. Once at the index location is found in the array, it is then the responsibility of the algorithm the iterate through the bucket and see if the key exists and return the value.

**Contains()**
The Contains method will accept a key, and return a bool on if that key exists inside the hashtable. The best way to do this is to have the contains call the GetHash and check the hashtable if the key exists in the table given the index returned.

**GetHash()**
The GetHash will accept a key as a string, conduct the hash, and then return the index of the array where the key/value should be placed.