class StringReversal
    def initialize(str:)
        puts reverse_string(str)
    end

    def reverse_string(str)
        # str.reverse
        stringArray = str.split("")
        reversedArray = []
        stringArray.each do |char|
            reversedArray.unshift(char)
        end
        reversedArray.join("")
    end
end

StringReversal.new(str: "Hello World") # => "dlroW olleH"