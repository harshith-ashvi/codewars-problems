// Waiting room

// There's a waiting room with N chairs set in single row. Chairs are consecutively numbered from 1 to N. First is closest to the entrance (which is exit as well).

// For some reason people choose a chair in the following way

// Find a place as far from other people as possible
// Find a place as close to exit as possible
// All chairs must be occupied before the first person will be served

// So it looks like this for 10 chairs and 10 patients

// Chairs	1	2	3	4	5	6	7	8	9	10
// Patients	1	7	5	8	3	9	4	6	10	2
// Your task is to find last patient's chair's number.

// Input - N - integer greater than 2 - number of chairs. Output should positive integer too - last patient's chair's number

// Have fun :)

function lastChair(N){
    return N - 1
}

function lastChair(N){
    return N < 3 ? N : N - 1;
}

function lastChair(N){

    return N-1; // what was the point of this??
  
    var seat;  
    var ranges = [];
    ranges[0] = createRange(0, N-1);
    
    // find candidate range
    for(var i = 2; i < N; i++) {
      var largestSize = 0;
      var candidateRangeIdx = 0;
      var smallestStart = N-1;
      // find the largest range closest to index 0
      for(var j = 0; j < ranges.length; j++) {
        
        // look for the biggest range
        if(ranges[j].size() > largestSize) {
          largestSize = ranges[j].size();
          smallestStart = ranges[j].start();
          candidateRangeIdx = j;
        }
        
        // look for a range the same size but closer to index 0
        if(ranges[j].size() == largestSize && ranges[j].start() < smallestStart) {
          smallestStart = ranges[j].start();
          candidateRangeIdx = j;
        }
      }
      
      if(ranges[candidateRangeIdx].size() % 2 == 0) { // even
        seat = Math.floor(ranges[candidateRangeIdx].size() / 2) + ranges[candidateRangeIdx].start();
      } else { // odd
        seat = Math.floor(ranges[candidateRangeIdx].size() / 2) + ranges[candidateRangeIdx].start() + 1;
      }
      
      // split range into two ranges
      ranges[ranges.length] = createRange(seat, ranges[candidateRangeIdx].end());
      ranges[candidateRangeIdx] = createRange(ranges[candidateRangeIdx].start(), seat);
    }
    
    return seat + 1;
  }
  
  
  var createRange = function(s, e) {
  
    var _start = s;
    var _end = e;
    var _size = e - s - 1;
  
    var _getSize = function() {
      return _size;
    };
    
    var _getStart = function() {
      return _start;
    };
    
    var _getEnd = function() {
      return _end;
    };
    
    var _toString = function() {
      return "start " + _getStart() + " end " + _getEnd() + " size " + _getSize();
    };
  
    return {
      start: _getStart,
      size: _getSize,
      end: _getEnd,
      toString: _toString
    };
}